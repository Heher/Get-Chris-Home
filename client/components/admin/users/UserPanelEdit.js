import React from 'react'

import PanelButtons from '../panel/PanelButtons'
import DraftNumber from './DraftNumber'

export default class UserPanelEdit extends React.Component {
  render() {
    const { user } = this.props

    return (
      <div className="panel">
        <input 
          type="text"
          onChange={this.props.handleInputChange.bind(this)}
          value={this.props.inputValue}
        />
        <p>Make Admin:</p>
        <input
          type="checkbox"
          checked={this.props.checkboxValue ? "checked" : ""}
          onChange={this.props.handleCheckboxChange.bind(this)}
        />
        <DraftNumber {...this.props} user={user} />
        <PanelButtons
          {...this.props}
          item={user}
          type="User"
          editing={user.editing}
          handleItemSave={this.props.handleItemSave.bind(this)}
        />
      </div>
    )
  }
}