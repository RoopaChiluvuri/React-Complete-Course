function Hello(){
  
  let myName = 'Roopa Chiluvuri';
  let number = 456;
  let fullName = () => {
    return 'Satya Sai Roopa Sree Chiluvuri';
  }

  return <p>
    Hello {number} this is the future speaking {fullName()}.
  </p>
}

export default Hello;