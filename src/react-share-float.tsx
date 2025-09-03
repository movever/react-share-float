import React from 'react';

export type ReactShareFloatProps = {
  children?: React.ReactNode;
};

export function ReactShareFloat({ children }: ReactShareFloatProps) {
  return (
    <div style={{ position: 'fixed', right: 16, bottom: 16, zIndex: 1000 }}>
      {children ?? <button>Share</button>}
    </div>
  );
}


