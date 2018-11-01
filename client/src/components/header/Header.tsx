import * as React from "react";

interface IHeaderProps {
  readonly isAuthenticated: boolean;
  readonly currentLocation: string;
  handleSignOut: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  handleSearchTermChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Header({ ...rest }: IHeaderProps) {
  return (
    <div className="sticky-top">

    </div>
  );
}