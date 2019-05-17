import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { incrementCounter,  decrementCounter} from './testActions'
import { openModal } from '../modals/ModalActions'

const mapState= (state) => ({
  data: state.test.data
})

const actions = {
  incrementCounter,
  decrementCounter,
  openModal
}

class TestComponent extends Component {
  render() {
    const {incrementCounter, decrementCounter, data, openModal} = this.props
    return (
      <div>
        <h1>Test Area</h1>
        <h3>the answer is: {data} </h3>
        <Button onClick={incrementCounter} color="green" content="increment" />
        <Button onClick={decrementCounter} color="red" content="decrement" />
        <Button onClick={() => openModal('TestModal', {data:36})} color="teal" content="Open Modal" />

      </div>
    )
  }
}

export default connect(mapState, actions)(TestComponent)