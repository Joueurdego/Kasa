import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Components/header";

describe("Header", () => {
  it("affiche le logo", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const logo = screen.getByAltText(/logo/i)
    expect(logo).toBeInTheDocument()
  })

  it("affiche les liens de navigation", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    expect(screen.getByText(/Accueil/i)).toBeInTheDocument()
    expect(screen.getByText(/À propos/i)).toBeInTheDocument()
  })
})