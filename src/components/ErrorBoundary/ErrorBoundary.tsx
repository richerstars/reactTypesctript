import React from 'react';

type TProps = {
    children: React.ReactNode
};

type TState = {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, TState> {
    constructor (props: TProps) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError () {
        return {hasError: true};
    }

    render () {
        if (this.state.hasError) {
            return <h1>Что-то пошло не так.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
