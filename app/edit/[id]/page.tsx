

const page = ({ params }: { params: { id: String } }) => {
    return (
        <div>editando {params.id}</div>
    )
}

export default page