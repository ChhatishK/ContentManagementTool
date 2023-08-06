document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.getElementById("wrapper");
    const fullNameDisplay = document.getElementById("fullName-display");
    const emailDisplay = document.getElementById("email-display");
    const mobNumDisplay = document.getElementById("mob-number-display");
    const villageDisplay = document.getElementById("village-display");
    const districtDisplay = document.getElementById("district-display");
    const pincodeDisplay = document.getElementById("pin-code-display");
    const imgDisplay = document.getElementById("image-display");
    const videoDisplay = document.getElementById("video-display");
    const qualiDisplay = document.getElementById("qualification-display");
    const experienceDisplay = document.getElementById("experience-display");
    const activityDisplay = document.getElementById("activities-display");
    const aboutDisplay = document.getElementById("about-section-display");

    const pageHeading = document.getElementById("page-heading");
    const resultHeading = document.getElementById("result-heading");
    wrapper.addEventListener("submit", (e) => {
        e.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const mobileNumber = document.getElementById("mobile-number").value;
        const village = document.getElementById("village").value;
        const district = document.getElementById("district").value;
        const pinCode = document.getElementById("pin-code").value;
        const qualification = document.getElementById("qualification").value;
        const experience = document.getElementById("Experience").value;
        const activities = document.getElementById("activities").value;
        const image = document.getElementById("image").files[0];
        const video = document.getElementById("video").files[0];
        const aboutSection = document.getElementById("about-section").value;

        // video.muted = false;
        fullNameDisplay.textContent = fullName;
        emailDisplay.textContent = email;
        mobNumDisplay.textContent = mobileNumber;
        villageDisplay.textContent = village;
        districtDisplay.textContent = district;
        pincodeDisplay.textContent = pinCode;
        imgDisplay.src = URL.createObjectURL(image);
        videoDisplay.src = URL.createObjectURL(video);
        videoDisplay.autoplay = true;

        qualiDisplay.textContent = qualification;
        experienceDisplay.textContent = experience;
        activityDisplay.textContent = activities;
        aboutDisplay.textContent = aboutSection;

        wrapper.reset();
        wrapper.style.display = "none";
        pageHeading.style.display = "none";
        resultHeading.style.display = "block";
        document.getElementById("submitted-content").style.display = "block";
    });
});
