import React, { FC } from 'react'

interface IPet {
    name: string,
    owner: string
}

const Pet: FC<IPet> = ({
    name,
    owner
}) => {
    return (<div>{name}'s owner is {owner}.</div>)
}

interface IwithOwner {
    Comp: any,
    name: string
}

const withOwner: (p: IwithOwner) => (props: any) => any = ({
    Comp,
    name,
}) => {
    return (props: any) => {
        return <Comp
            {...props}
            owner={name}
        ></Comp>
    }
}

const JoelPet = withOwner({Comp: Pet, name: 'Joel'})

export default JoelPet