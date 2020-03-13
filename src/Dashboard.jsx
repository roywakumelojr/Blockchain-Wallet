import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Label, Table } from 'semantic-ui-react';

import axios from 'axios'

const Dashboard = () => {
    const miner_username = localStorage.getItem("user_name");

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        getChainInformation();
    }, []);

    function getChainInformation() {
        axios
        .get(`http://0.0.0.0:5000/chain`)
        .then(response => {
            setCoins(response.data.chain);
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div className='dashboard-container'>
            <div className='logout-button-container'>
                <Link className='logout-button' onClick={() => localStorage.clear()} to='/'>
                    Logout
                </Link >
            </div>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            <Label ribbon color='green'>Welcome {miner_username}!</Label>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            </Table>
            <Table celled textAlign='center'>
                
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Block Number</Table.HeaderCell>
                        <Table.HeaderCell>Submitted Proof</Table.HeaderCell>
                        <Table.HeaderCell>Timestamp</Table.HeaderCell>
                        <Table.HeaderCell>Rewarded Coin(s)</Table.HeaderCell>
                        <Table.HeaderCell>USD value</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                { coins.map (coins => (
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>{coins.index}</Table.Cell>
                            <Table.Cell>{coins.proof}</Table.Cell>
                            <Table.Cell>{coins.timestamp}</Table.Cell>
                            <Table.Cell>{}</Table.Cell>
                            <Table.Cell>{}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                ))}
                    
            </Table>        
        </div>
    );
}

export default Dashboard;