import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefono, oggetto, messaggio } = body;

    if (!nome || !email || !messaggio) {
      return NextResponse.json(
        { error: "Nome, email e messaggio sono obbligatori" },
        { status: 400 }
      );
    }

    const payload = {
      nome,
      email,
      telefono: telefono || "",
      oggetto: oggetto || "",
      messaggio,
      timestamp: new Date().toISOString(),
    };

    console.log("Nuovo contatto ricevuto:", payload);

    return NextResponse.json(
      { message: "Messaggio inviato con successo" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Errore durante l'invio del messaggio" },
      { status: 500 }
    );
  }
}
