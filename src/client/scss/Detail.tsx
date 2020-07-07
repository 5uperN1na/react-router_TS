import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { StringLiteralType } from 'typescript';

export default class Detail extends React.Component<IDetailProps, IDetailState> {

    constructor(props: IDetailProps) {
        super(props);
        this.state = {
            name: this.props.match.params.name
        };
    }

    updateName = (e.React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
}



render() {

    return (
        < section >
            <h1>{this.state.name}</h1>
            <div classname="form-group">
                <label htmlFor="name">Update Name</label>
                <input type="text" classname="form-control" defaultValue={this.state.name}
                    onChange={this.updateName}>
                </input>

            </div>
        </section>


    );


}



interface IDetailProps extends RouteComponentProps<{name: string}>{
    
}

interface IDetailState {
    name: string;

}