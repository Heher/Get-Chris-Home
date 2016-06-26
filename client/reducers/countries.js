function countries(state = [], action) {
  const { id, userId, round, draftNum, payload } = action

  switch(action.type) {
    case 'RECEIVE_COUNTRIES' :
      return Object.assign([], state, action.countries)

    case 'SELECT_COUNTRY' :
      return state.map(country => {
        if ((country.userId === userId) && country.selected) {
          return {
            ...country,
            selected: false,
            userId: ""
          }
        }
        if (country._id === id) {
          return {
            ...country,
            selected: true,
            userId
          }
        }
        return {
          ...country
        }
      })

    case 'DESELECT_COUNTRY' :
      return state.map(country => {
        if (country._id !== id) {
          return country
        } else {
          return {
            ...country,
            selected: false,
            userId: ""
          }
        }
      })

    case 'DRAFT_COUNTRY' :
      return state.map(country => {
        if (country._id !== id) {
          return country
        } else {
          return {
            ...country,
            selected: false,
            drafted: true,
            round,
            draftNum
          }
        }
      })

    case 'ADD_COUNTRY' :
      return [
        ...state,
        ...action.json
      ]

    case 'DELETE_COUNTRY' :
      const newState = []
      state.map(country => {
        if (country._id !== action.id) {
          newState.push(country)
        }
      })
      return newState

    case 'SET_EDITING_COUNTRY' :
      return state.map(country => {
        if(country._id !== id) {
          return country
        }
        return {
          ...country,
          editing: !country.editing
        }
      })

    case 'SAVED_COUNTRY' :
      return state.map(country => {
        if (country._id !== id) {
          return country
        }
        return {
          ...country,
          ...payload,
          editing: !country.editing
        }
      })

    case 'FETCH_COUNTRIES' :
      console.log("JOHN")
      return state

    default:
      return state
  }
}

export default countries