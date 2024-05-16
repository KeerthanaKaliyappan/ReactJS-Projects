import React, { Component } from 'react'

class StudentDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
       
    }

    goToProfile(){
        this.props.history.push('/student');
    }

    goToMarks(){
        this.props.history.push('/studentMarks');
    }

    goToActivity(){
        this.props.history.push('/announcements');
    }
    
    render() {
        return (
            <div className="container">
                <div className="card p-5 offset-3 col-5 shadow">
                    <h4>UserProfile</h4>
                    <button onClick={() => this.goToProfile()}>View Profile</button>
                    <button onClick={() => this.goToMarks()}>View Marks</button>
                    <button onClick={() => this.goToActivity()}>View Activity</button>
                </div>
            </div>
        )
    }
}

export default StudentDashboard;
