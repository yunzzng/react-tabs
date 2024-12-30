let frameCount = 0;
let startTime = performance.now();    // 시작 시간을 현재 시간으로 설정

function Frame() {  
    frameCount++;    
    const currentTime = performance.now();
    const measuredTime = currentTime - startTime; 

    // 1초에 requestAnimationFrame 몇번 실행되는지
    if (measuredTime >= 1000) { 
        console.log(`Frame: ${frameCount} FPS`);
        frameCount = 0; 
        startTime = currentTime; 
    }
    requestAnimationFrame(Frame); 
}
requestAnimationFrame(Frame);