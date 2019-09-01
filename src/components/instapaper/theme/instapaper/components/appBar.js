export default ({ nest, white, DIVIDER, TOOLBAR, ICON }) => ({
  MuiAppBar: {
    root: {
      height: 97,
      borderBottom: '1px solid rgba(0,0,0,0.0975)',
      alignItems: 'center',
      '& .image__instagram-logo': {
        width: 30,
        height: 30,
      },
      '& .image__instagram-label': {
        maxWidth: 103,
        height: 50,
        marginTop: 4,
      },
      [nest(TOOLBAR.root)]: {
        padding: '26px 20px',
        maxWidth: 1010,
        width: '100%',
      },
      [nest(ICON.root)]: {
        fontSize: 24,
        '&:not(:first-child)': {
          marginLeft: 30,
        },
      },
      [nest(DIVIDER.vertical)]: {
        height: 28,
      },
    },
    colorDefault: {
      backgroundColor: white.text,
    },
  },
});
