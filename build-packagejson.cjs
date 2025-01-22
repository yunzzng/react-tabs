// build-packagejson.cjs
const fs = require("fs");
const path = require("path");
const packageJson = require("./package.json");
const buildDir = path.resolve(__dirname, "dist");
const packageName = "yunseul-ui-elements";

const getPackageJsonData = () => {
  const { react: reactVersion, "react-dom": reactDomVersion } =
    packageJson.dependencies;
  return {
    // 배포를 할 때마다 버전 수정해야됨
    version: "0.0.15",
    name: packageName,
    main: "./index.cjs",
    module: "./index.js",
    types: "./types/index.d.ts",
    peerDependencies: {
      react: reactVersion,
      "react-dom": reactDomVersion,
    },
  };
};

const makePackageJson = () => {
  try {
    const buildPackageJsonData = getPackageJsonData();
    fs.writeFileSync(
      path.resolve(buildDir, "package.json"),
      JSON.stringify(buildPackageJsonData)
    );
  } catch (err) {
    console.log(err);
  }
};

makePackageJson();