/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            boxShadow: {
                card: "0 10px 40px 0 rgb(39 37 63 / 15%),0 2px 9px 0 rgb(39 37 63 / 15%)",
            },
        },
    },
    plugins: [],
};
