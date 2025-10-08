import React from 'react';
import Link from 'next/link';

// Interface is used for type safety , it tells the property of an object and its type 
interface Crumb {
  label: string;
  path: string;
}

const page: React.FC = () => {

  const homeCrumb: Crumb = {
    label: 'Home',
    path: '/'
  };

  const breadcrumbs: Crumb[] = [homeCrumb];

  return (
    <div>
      <nav aria-label="breadcrumb" style={{ padding: '10px 20px', backgroundColor: '#f9f9f9' }}>
        <ol style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          fontSize: '14px'
        }}>

          {breadcrumbs.map((crumb: Crumb, index: number) => (
            <li key={crumb.path} style={{ display: 'flex', alignItems: 'center' }}>

              <Link
                href={crumb.path}
                style={{
                  textDecoration: 'none',
                  color: index === breadcrumbs.length - 1 ? '#000' : '#6a6a6a',
                  fontWeight: index === breadcrumbs.length - 1 ? 'bold' : 'normal'
                }}
              >
                {crumb.label}
              </Link>

              {index < breadcrumbs.length - 1 && (
                <span style={{ margin: '0 8px', color: '#ccc' }}>&gt;</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

    </div>
  );
}

export default page;
