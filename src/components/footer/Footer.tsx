interface FooterProps {
  showModal: () => void;
}

export default function Footer({ showModal }: FooterProps) {
  return (
    <footer className=" flex flex-row justify-end w-4/5">
      <button onClick={showModal}>Rules</button>
    </footer>
  );
}
