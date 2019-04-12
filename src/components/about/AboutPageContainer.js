import React from 'react'
import {connect} from 'react-redux'
import AboutPage from './AboutPage'
import Team from './Team'
class AboutPageContainer extends React.Component {
  componentDidMount() {
  // something
  }

  render() {
    return (
      <div>
    <AboutPage />
    <Team/>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  // something
})

export default connect(mapStateToProps)(AboutPageContainer)