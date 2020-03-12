import React from "react";
import ReactDOM from "react-dom";

class FriendsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Tyler McGinnis',
            friends: ['Jake Lingwall', 'Sarah Drasner', 'Merrick Christensen']
        }
        this.addFriend = this.addFriend.bind(this)
        this.removeFriend = this.removeFriend.bind(this)

    }

    addFriend(friend) {
        this.setState((state) => ({
            friends: state.friends.concat([friend])
        }))
    }

    removeFriend(friend) {
        this.setState((state) => ({
            friends: state.friends.concat([friend])
        }))
    }

    render() {
        return (
            <div>
                <h3> Name: {this.state.name}</h3>
                <AddFriend addNew={this.addFriend} />
                <RemoveFriend remove={this.removeFriend} />
                <ShowList names={this.state.friends} />
            </div>
        )
    }
}

class ShowList extends React.Component {
    render() {
        return (
            <div>
                <h3> Friends </h3>
                <ul>
                    {this.props.names.map((friend) => <li>{friend}</li>)}
                </ul>
            </div>
        )
    }
}

class AddFriend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newFriend: ''
        }
        this.updateNewFriend = this.updateNewFriend.bind(this)
        this.handleAddNew = this.handleAddNew.bind(this)
    }

    updateNewFriend(e) {
        this.setState({
            newFriend: e.target.value
        })
    }

    handleAddNew() {
        this.props.addNew(this.state.newFriend)
        this.setState({
            newFriend:''
        })
    }

    render() {
        return (
            <div>
                <input
                type="text"
                value={this.state.newFriend}
                onChange={this.updateNewFriend}
                />
                <button onClick={this.handleAddNew}> Add Friend </button>
            </div>
        )
    }
}

class RemoveFriend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newFriend: ''
        }
        this.updateNewFriend = this.updateNewFriend.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    updateNewFriend(e) {
        this.setState({
            newFriend: e.target.value
        })
    }

    handleRemove() {
        this.props.remove(this.state.newFriend)
        this.setState({
            newFriend:''
        })
    }

    render() {
        return (
            <div>
                <input
                type="text"
                value={this.state.newFriend}
                onChange={this.updateNewFriend}
                />
                <button onClick={this.handleRemove}> Remove Friend </button>
            </div>
        )
    }
}

export default FriendsContainer;