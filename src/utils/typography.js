import Typography from 'typography';
import parnassusTheme from 'typography-theme-parnassus';

parnassusTheme.overrideStyles = () => ({
  a: {
    color: '#375c85',
    textDecoration: 'none',
    boxShadow: 'none',
  },
});

const typography = new Typography(parnassusTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm } = typography;
export const { scale } = typography;
