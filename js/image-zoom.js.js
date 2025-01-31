document.addEventListener("DOMContentLoaded", function () {
    // 选择所有文章内的图片
    const images = document.querySelectorAll("article img");
  
    // 为每张图片添加点击事件监听器
    images.forEach(function (image) {
      image.addEventListener("click", function () {
        // 创建图片放大容器
        const zoomContainer = document.createElement("div");
        zoomContainer.className = "image-zoom-container";
  
        // 创建关闭按钮
        const closeButton = document.createElement("span");
        closeButton.className = "image-zoom-close";
        closeButton.textContent = "×";
        closeButton.style.position = "absolute";
        closeButton.style.top = "10px";
        closeButton.style.right = "10px";
        closeButton.style.fontSize = "30px";
        closeButton.style.color = "white";
        closeButton.style.cursor = "pointer";
  
        // 为关闭按钮添加点击事件监听器
        closeButton.addEventListener("click", function () {
          document.body.removeChild(zoomContainer);
        });
  
        // 创建放大后的图片元素
        const zoomImage = document.createElement("img");
        zoomImage.src = image.src;
  
        // 将关闭按钮和放大后的图片添加到容器中
        zoomContainer.appendChild(closeButton);
        zoomContainer.appendChild(zoomImage);
  
        // 将容器添加到页面中
        document.body.appendChild(zoomContainer);
  
        // 显示图片放大容器
        zoomContainer.style.display = "flex";
      });
    });
  });