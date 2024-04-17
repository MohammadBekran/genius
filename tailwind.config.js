/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#2196F3",
        secondary: "#DAEEFF",
        footerBackground: "#252641",
        footerCopyRightBackground: "#00000033",
        socialMediaIcon: "#263238",
      },
      backgroundImage: {
        headerBg: "url('/src/assets/images/Header/header-bg.png')",
        headerBgBottom:
          "url('/src/assets/images/Landing/header-bg-bottom.png')",
        landingPageProgrammingLanguagesIcon:
          "url('/src/assets/images/Landing/Icons.png')",
        landingCategoriesTitleAfter:
          "url('/src/assets/images/Landing/LandingCategories/title-after.svg')",
        landingCategoriesItemsAfter:
          "url('/src/assets/images/Landing/LandingCategories/items-after.svg')",
      },
      colors: {
        primaryColor: "#2196F3",
        text1: "#263238",
        text2: "#455A64",
        text3: "#607D8B",
        red: "#F44336",
      },
      fontFamily: {
        yekanBakh: "YekanBakh",
      },
      boxShadow: {
        primaryShadow: "0px 0px 50px 0px #0000000D",
        landingCategoryItemShadow: "0px 10px 50px 0px #0000000D",
        landingTeacherCoursesCount: "0px 0px 20px 0px #0000004D",
        footerJoinInputShadow: "0px 0px 20px 0px #00000005",
        footerJoinButtonShadow: "0px 0px 20px 0px #2196F333",
      },
    },
  },
  plugins: [],
};
