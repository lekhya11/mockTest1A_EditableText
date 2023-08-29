import {Component} from 'react'
import './index.css'

class Editable extends Component {
  state = {isClicked: false, inputText: ''}

  OnClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {isClicked, inputText} = this.state
    const buttonText = isClicked ? 'Edit' : 'Save'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Editable Text Input</h1>
          <div className="input-container">
            {isClicked ? (
              <p>{inputText}</p>
            ) : (
              <input
                type="text"
                onChange={this.onChangeInput}
                value={inputText}
              />
            )}
            <button type="button" onClick={this.OnClickButton}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Editable
