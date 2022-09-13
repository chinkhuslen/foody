export const CustomThemePage = ()=>{
    const styles = {
        myButton: {
          backgroundColor: "red",
          height: 100,
        },
        anotherButton: {
          backgroundColor: "blue",
          height: 100,
        },
      };
      const MyDiv = styled("div")(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
          backgroundColor: theme.palette.secondary.dark,
        },
        [theme.breakpoints.between('sm',"md")]: {
          backgroundColor: theme.palette.secondary.light,
        },
        [theme.breakpoints.between("md",'lg')]: {
          backgroundColor: theme.palette.primary.light,
        },
        [theme.breakpoints.between("lg",'xl')]: {
          backgroundColor: theme.palette.primary.main,
        },
        [theme.breakpoints.up('xl')]: {
          backgroundColor: theme.palette.secondary.main,
        },
      }));
      return(
        <CustomTheme>
      {/* <div className="App">
      <header className="App-header">
        <AppBar>
          <Button variant="text" sx={styles.myButton}>
            Text
          </Button>
          <Button variant="contained" sx={styles.anotherButton}>
            Contained
          </Button>
          <Button variant="outlined">Outlined</Button>
        </AppBar>
      </header>
    </div> */}
      <MyDiv>Hello</MyDiv>
      {/* <Button variant="contained" color="primary">
        Hello
      </Button> */}
    </CustomTheme>
      )
}