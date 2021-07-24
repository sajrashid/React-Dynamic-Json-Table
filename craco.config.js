// craco.config.js
let target = 'web';
if (process.env.REACT_APP_MODE === 'electron') {
  target = 'electron-renderer'
}
console.log(`craco.config.js: setting webpack target to: ${target}`);
module.exports = {
    webpack: {
        configure: {
            target: target
        }
    }
};
module.exports = {
    jest: {
        configure: {
            globals: {
                "CONFIG": true
            }
        }
    }
};
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }
  