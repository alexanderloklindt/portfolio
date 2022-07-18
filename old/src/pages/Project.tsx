import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

export interface IProjectsPageProps {}

const ProjectsPage: React.FunctionComponent<IProjectsPageProps> = (props) => {
    const auth = getAuth();

    return (
        <div>
            <h1>Projects Page (Protected by Firebase!)</h1>
            <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
        </div>
    );
};

export default ProjectsPage;