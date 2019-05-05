import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.8,
  bodyFontFamily: ['Merriweather', 'sans-serif'],
  bodyWeight: 400,
  boldWeight: 700,
  headerFontFamily: ['Merriweather Sans', 'sans-serif'],
  headerWeight: 800,
  googleFonts: [
    {
      name: 'Merriweather Sans',
      styles: ['800'],
    },
    {
      name: 'Merriweather',
      styles: ['400', '400i', '700'],
    },
  ],
  scaleRatio: 2.2,
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
