import "./header.css";

interface HeaderProps {
  // para ser opcional coloca "?" antes dos ":"
  title?: string;
}

export function Header({ title = "Curso React + TypeScript" }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>

      <hr />
    </header>
  );
}
