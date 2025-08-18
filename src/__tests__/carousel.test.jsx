import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Carousel from "../Components/carousel";
import * as useLogementHook from "../hooks/useLogement";
import { vi } from "vitest";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: () => ({ id: "123" }),
  };
});

vi.mock("../hooks/useLogement");

describe("Carousel", () => {
  beforeEach(() => {
    useLogementHook.default.mockReturnValue({
      loading: false,
      error: null,
      data: {
        title: "Test logement",
        pictures: ["image1.jpg", "image2.jpg", "image3.jpg"],
      },
    });
  });

  it("affiche le loading si loading est true", () => {
    useLogementHook.default.mockReturnValue({ loading: true });
    render(<Carousel />);
    expect(screen.getByText(/Chargement en cours/i)).toBeInTheDocument();
  });

  it("affiche l'erreur si error existe", () => {
    useLogementHook.default.mockReturnValue({ loading: false, error: "Erreur" });
    render(<Carousel />);
    expect(screen.getByText(/Erreur/i)).toBeInTheDocument();
  });

  it("affiche 'Aucune donnée' si pas d'images", () => {
    useLogementHook.default.mockReturnValue({ loading: false, error: null, data: { title: "Vide", pictures: [] } });
    render(<Carousel />);
    expect(screen.getByText(/Aucune donnée/i)).toBeInTheDocument();
  });

  it("affiche la première image et le compteur correct", () => {
    render(<Carousel />);
    expect(screen.getByAltText(/Image 1 de Test logement/i)).toBeInTheDocument();
    expect(screen.getByText(/1\s*\/\s*3/)).toBeInTheDocument();
  });

  it("passe à la slide suivante", async () => {
    render(<Carousel />);
    const nextButton = screen.getByRole("button", { name: "❱" });
    await userEvent.click(nextButton);
    expect(screen.getByAltText(/Image 2 de Test logement/i)).toBeInTheDocument();
    expect(screen.getByText(/2\s*\/\s*3/)).toBeInTheDocument();
  });

  it("revient à la slide précédente", async () => {
    render(<Carousel />);
    const nextButton = screen.getByRole("button", { name: "❱" });
    const prevButton = screen.getByRole("button", { name: "❰" });
    await userEvent.click(nextButton); 
    await userEvent.click(prevButton); 
    expect(screen.getByAltText(/Image 1 de Test logement/i)).toBeInTheDocument();
    expect(screen.getByText(/1\s*\/\s*3/)).toBeInTheDocument();
  });

  it("boucle à la dernière slide quand on clique sur précédent depuis la première", async () => {
    render(<Carousel />);
    const prevButton = screen.getByRole("button", { name: "❰" });
    await userEvent.click(prevButton);
    expect(screen.getByAltText(/Image 3 de Test logement/i)).toBeInTheDocument();
    expect(screen.getByText(/3\s*\/\s*3/)).toBeInTheDocument();
  });

  it("boucle à la première slide quand on clique sur suivant depuis la dernière", async () => {
    render(<Carousel />);
    const nextButton = screen.getByRole("button", { name: "❱" });
    await userEvent.click(nextButton);
    await userEvent.click(nextButton);
    await userEvent.click(nextButton);
    expect(screen.getByAltText(/Image 1 de Test logement/i)).toBeInTheDocument();
    expect(screen.getByText(/1\s*\/\s*3/)).toBeInTheDocument();
  });
});