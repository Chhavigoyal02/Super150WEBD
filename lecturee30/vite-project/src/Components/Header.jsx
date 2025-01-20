function Header(){
    return(
      <h1>
        Header 
        <p>{Math.floor(Math.random()*10)}</p>
      </h1>
    )
}

export default Header;