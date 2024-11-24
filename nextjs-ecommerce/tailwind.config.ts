/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

              primary: "#ff00ff",

              secondary: "#ff00ff",

              accent: "#00ffff",

              neutral: "#ff00ff",

              "base-100": "#ff00ff",

              info: "#0000ff",

              success: "#00ff00",

              warning: "#00ff00",

              error: "#ff0000",

              body: {
                "background-color": "#e3e6e6",
              },
          },
        },
      ],
    },
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: [
//       {
//         lightTheme: {
//           primary: "#f4aa3a",
//           secondary: "#f4f4a1",
//           accent: "#1be885",
//           neutral: "#272136",
//           "base-100": "#ffffff",
//           info: "#778ad4",
//           success: "#23b893",
//           warning: "#f79926",
//           error: "#ea535a",
//           body: {
//             "background-color": "#e3e6e6",
//           },
//         },
//       },
//     ],
//   },
// };
