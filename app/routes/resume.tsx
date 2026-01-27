import {useParams} from "react-router";


export const meta = () => ([
    { title: 'Resumind | Review' },
    { name: 'description', content: 'Detailed overview of review' },
])

const Resume = () => {
    const {id} = useParams();

    return (
     <main>

     </main>
    )
}
export default Resume
