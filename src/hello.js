import React, { Component } from 'react'

export default class Hello extends Component {
    render() {
        return (
            <div>
                <div className="card-body">
                    <h5 className="card-title">Use Cases</h5>
                    <ul className="card-design">
                        <li>Advanced computation like LTV and attribution models</li>
                        <li>Syc traits from  cloud sorces like salesforce and zendesk</li>
                        <li>Sync traits from external database tables like your users and account stables </li>
                    </ul>
                    SQL queries will be excuted directly in your data warehouse,which could generate additional on pay-per-query warehouse
    <button type="button" className="btn btn-success btn-color">Configue...</button>
                </div>
            </div>
        )
    }
}