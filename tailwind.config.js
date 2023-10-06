/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth:{
        conttainer:"1440px"
      },
      screens:{
        xs:"320px",
       sm:"375px",
       sml:"500px",
       md:"667px",
       mdl:"768px",
       lg:"960",
       lgl:"1024px",
       xl:"1280px",
      },
      fontFamily:{
        titleFont:"Roboto",
        bodyFont: "Poppins",
      },
    colors:{
        amazon_blue:"#131921",
        amazon_light:"#232F3E",
        amazon_yellow:"#febd69",
        whiteText:"#ffffff",
        lightText:"#ccc",
        quantity_box:"#FoF2F2",
        footerBottom:"#131A22"
      },
      boxShadow:{
        textShadow:"0px 0px 32px 1px rbga(199,199,199,1)",
        amazonInput:"0 0 3px 2px rgb(228 121 17 / 50%)"
      }
    },
  },
  plugins: [],
}
