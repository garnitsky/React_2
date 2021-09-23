import React from 'react';


class ProfileStatus extends React.Component {

    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    };

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input autofocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
                    </div>
                }
            </div>
        )
    };
};

export default ProfileStatus;