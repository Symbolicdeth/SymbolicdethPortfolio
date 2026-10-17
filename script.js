document.addEventListener("DOMContentLoaded", () => {
    const previews = document.querySelectorAll(".project-video-preview");

    if (!("IntersectionObserver" in window)) {
        previews.forEach((video) => video.play().catch(() => {}));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
    }, { rootMargin: "250px" });

    previews.forEach((video) => observer.observe(video));
});
