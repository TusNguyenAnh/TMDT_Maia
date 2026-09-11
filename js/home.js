document.addEventListener("DOMContentLoaded", () => {

    // 1. Back to top button
    const backToTopBtn = document.querySelector(".back-to-top");
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 2. Sidebar sub-menu toggle (click to expand/collapse)
    const sidebarHasSubItems = document.querySelectorAll(".hero__sidebar-item--has-sub");
    sidebarHasSubItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const wrapper = item.closest(".hero__sidebar-wrapper");
            const sub = wrapper ? wrapper.querySelector(".hero__sidebar-sub") : null;

            // Collapse all other open sub-menus
            sidebarHasSubItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove("open");
                    const otherWrapper = other.closest(".hero__sidebar-wrapper");
                    const otherSub = otherWrapper ? otherWrapper.querySelector(".hero__sidebar-sub") : null;
                    if (otherSub) otherSub.classList.remove("show");
                }
            });

            // Toggle current item
            item.classList.toggle("open");
            if (sub) sub.classList.toggle("show");
        });
    });

    // 3. Account dropdown toggle
    const accountBtn = document.getElementById("accountBtn");
    const accountDropdown = document.getElementById("accountDropdown");

    if (accountBtn && accountDropdown) {
        accountBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = accountDropdown.classList.toggle("show");
            accountBtn.setAttribute("aria-expanded", String(isOpen));
        });

        // Close when clicking outside
        document.addEventListener("click", (e) => {
            if (!accountBtn.contains(e.target) && !accountDropdown.contains(e.target)) {
                accountDropdown.classList.remove("show");
                accountBtn.setAttribute("aria-expanded", "false");
            }
        });

        // Close on Escape
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                accountDropdown.classList.remove("show");
                accountBtn.setAttribute("aria-expanded", "false");
            }
        });
    }

});
