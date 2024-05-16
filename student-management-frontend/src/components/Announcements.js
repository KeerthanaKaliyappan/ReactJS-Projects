import React, { Component } from 'react'
import DashboardService from '../services/DashboardService'

class Announcements extends Component {
    constructor(props) {
        super(props)
        this.state = {
            announcements: []
        } 
    }

    componentDidMount(){
        DashboardService.getAnnouncements().then((response) => 
            this.setState({announcements: response.data})
        )
    }
    
    render() {
        return (
            <div className="container">
                <div className="card p-5 offset-3 col-5 shadow">
                    <h4>Announcements</h4>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Upcoming Activity </th>
                                <th> Month </th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    this.state.announcements.map(
                                        announcement => 
                                        <tr key = {announcement.announcementId}>
                                             <td> {announcement.activity} </td>   
                                             <td> {announcement.date}</td>
                                        </tr>
                                    )
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Announcements
