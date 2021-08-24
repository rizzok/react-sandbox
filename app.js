const mainText = "Jujubes tiramisu powder jujubes sweet roll tootsie roll sweet cupcake jujubes. Pie pie jujubes ice cream jelly candy gummi bears tootsie roll. Sugar plum cake biscuit chocolate bar marzipan. Gummi bears cotton candy pastry dessert brownie carrot cake topping cake. Powder danish soufflé sweet lollipop gingerbread tiramisu. Tootsie roll biscuit liquorice bonbon liquorice muffin. Muffin donut soufflé. Topping sugar plum carrot cake lemon drops cotton candy danish icing sweet. Marshmallow toffee topping cotton candy tootsie roll halvah jujubes. Icing cotton candy sesame snaps biscuit dragée sugar plum. Macaroon sugar plum wafer. Marzipan dessert gingerbread brownie chocolate cake chocolate cake ice cream candy canes biscuit. Icing donut cake. Pastry sugar plum donut. Soufflé candy canes cake. Donut powder sweet roll oat cake cake gummi bears gummi bears brownie. Dragée cheesecake marshmallow apple pie jujubes cheesecake. Topping sweet roll donut cheesecake donut. Toffee jelly beans donut tiramisu caramels tiramisu wafer. Chocolate bar soufflé bear claw tootsie roll marzipan cake. Croissant marshmallow wafer halvah candy canes soufflé tootsie roll jujubes bear claw. Apple pie marshmallow jelly-o. Oat cake pie marshmallow candy sugar plum. Cotton candy carrot cake dragée gummi bears. Chocolate cake apple pie chocolate cake marshmallow apple pie lemon drops jujubes lemon drops caramels."

class Header extends React.Component {

  render () {
    return <header className="header">
      <h1 className="logo"><a href="#">Logo</a></h1>
      <Menu  />
    </header>
  }
  
}

class Menu extends React.Component {

  render () {
    return <ul className="menu">
      <LiLink label="Accueil" />
      <LiLink label="About" />
      <LiLink label="Pricing" />
      <LiLink label="Contact" />
    </ul>
  }

}

class LiLink extends React.Component {

  render () {
    return <li className="link-item"><a href="#">{this.props.label}</a></li>
  }
  
}

class Main extends React.Component {

  render () {
    const {text} = this.props
    return <main>
      <p>{text}</p>
    </main>
  }
  
}

class Footer extends React.Component {

  render () {
    return <footer className="footer">
      <LinkList />
      <LinkList />
      <LinkList />
    </footer>
  }
  
}

class LinkList extends React.Component {

  render () {
    return <ul className="footer-nav">
      <LiLink label="Accueil" />
      <LiLink label="About" />
      <LiLink label="Pricing" />
      <LiLink label="Contact" />
    </ul>
  }
  
}

class Clock extends React.Component {

  constructor (props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount () {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({date: new Date()})
  }

  render () {
    return <div className="clock">
      <p>{this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}</p>
    </div>
  }
  
}

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchChange (e) {
    this.props.onInputChange(e.target.value)
  }

  render () {
    const inputValue = this.props.inputValue

    return <div id="search-bar-group">
      <label htmlFor="seach-bar">Search: </label>
      <input type="text" name="search-bar" id="search-bar" value={inputValue} onChange={this.handleSearchChange}/>
    </div>
  }
  
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {search: ''}
    this.handleSearch = this.handleSearch.bind(this)
    this.filterText = this.filterText.bind(this)
  }

  handleSearch (inputValue) {
    this.setState({search: inputValue})
  }

  filterText (text) {
    const inputSearch = this.state.search.toLowerCase();
    if (inputSearch === '') return text;
    
    const words = text.split(' ');
    let allWords = '';

    words.forEach(word => {
      if (inputSearch.indexOf(word.toLowerCase()) === -1) return;
      allWords += word + ' ';
    })
    return allWords;
  }

  render () {
    const search = this.state.search
    const text = this.props.text
    const mainText = this.filterText(text)

    return <div>
      <Header />
      <Clock />
      <SearchBar 
        inputValue={search}
        onInputChange={this.handleSearch}
      />
      <Main text={mainText}/>
      <Footer />
    </div>
  }

}

ReactDOM.render(
  <App text={mainText}/>,
  document.getElementById('app')
)
