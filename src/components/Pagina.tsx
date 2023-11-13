import Grid from "./Grid";

interface PaginaProps {
  children?: React.ReactElement;
}

export default function Pagina({ children }: PaginaProps) {
  return (
    <div className={`flex bg-gradient-to-b from-emerald-950 to-stone-950 w-screen h-screen`}>
      <Grid>{children}</Grid>
    </div>
  );
}
