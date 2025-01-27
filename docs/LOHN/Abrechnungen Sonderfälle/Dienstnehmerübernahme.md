# Dienstnehmerübernahme

In bestimmten Fällen, wie Insolvenzabrechnungen, AVRAG-Übernahmen, usw. ist es notwendig, Dienstnehmer von einem Klienten auf einen anderen zu überspielen. Nachdem die Vorgehensweise im Detail sehr stark vom Einzelfall abhängt, fertigen Sie ggf. einen Sicherungsstand an und kontaktieren Sie den RZL-Support.

## Anlage eines neuen Klienten bzw. bestehenden Klienten duplizieren

Zunächst ist der Klient, auf den die Dienstnehmer übernommen werden sollen, neu anzulegen. Vor allem ist darauf zu achten, dass die verwendeten freien Lohnarten gleich sind.

Nachdem in sehr vielen Fällen ein Naheverhältnis zwischen den Firmen bestehen wird und auch sehr viele Grunddaten identisch sein werden, empfiehlt sich, zur Zeitersparnis sehr häufig, stattdessen den bestehenden Klienten zu duplizieren. In der *ZMV* – *Zentralen Mandantenverwaltung* kann über den Menüpunkt *Klient / Nummer duplizieren / Erweitert* z. B. nur das Lohnverrechnungsjahr 2020 den Klienten Nummer 1 auf die Nummer 100 dupliziert werden.

Jene Details, die sich verändert haben, wie z. B. Wortlaut der Firma, Steuernummer, Beitragskontonummer sind über die *ZMV* oder das *RZL-Board* anzupassen.

## Übernahme der Dienstnehmer

Die Übernahme der Dienstnehmer in einen anderen Klienten erfolgt im Programmteil *Bearbeiten / Übernahme / Dienstnehmer-Übernahme in anderen Klienten*. Die Übernahme der Dienstnehmer in den anderen Klienten kann mit *Wiedereintritt* oder *vollständige Übernahme* erfolgen.

![Image](<img/image513.png>){width="500"}

!!! info "Tipp"
    Die Dienstnehmer können im Zuge der Übernahme auf den neuen Klienten komplett neu durchnummeriert werden oder einzeln neuen Dienstnehmernummern zugewiesen werden. Durch Anwahl des Feldes *lfd. (laufend) nummerieren* werden die Dienstnehmer aufsteigend neu durchnummeriert.

**Übernahme mit Wiedereintritt**

Häufig wird diese Variante mit einer vorherigen Abmeldung im alten Klienten, meist mit Grund *Ummeldung* einhergehen. Wurde der Klient über die *ZMV* auf die neue Nummer dupliziert, müssen die bestehenden alten Dienstnehmerdaten über *Abrechnung / Löschung Stammdaten* gelöscht werden.

Anschließend werden durch die Übernahme mit der Variante *Wiedereintritt,* NUR die Dienstnehmer-Stammdaten und die Vorbezüge in den neuen Klienten übernommen. Im neuen Klienten gibt es für die Dienstnehmer noch keine gespeicherte Abrechnung. Die Dienstnehmer müssen erstmalig mit der Abrechnungsart *Wiedereintritt* abgerechnet und bei vorheriger Abmeldung nun auch wieder angemeldet werden.

Die Vorbezüge aus dem alten Klienten bleiben dabei erhalten und finden in der Jahressechstelberechnung Berücksichtigung.

!!! info "Tipp"
    Die Variante der Übernahme mit Übernahme bei der nur die Stammdaten der Dienstnehmer im neuen Klienten benötigt werden, ist bei Insolvenzen, Umgründungen, usw. fast immer die sinnvollste Variante. Es ist zu beachten, dass am Jahresende sowohl aus dem alten Klienten, als auch dem neuen Klienten, ein L16 erstellt werden muss.

**Vollständige Übernahme**

Die Variante der *vollständigen Übernahme* bedeutet, dass auch sämtliche bisherigen Abrechnungen der Dienstnehmer in den neuen Klienten übernommen werden. Am Jahresende ergibt sich daraus ein gemeinsamer durchlaufender L16-Zeitraum 01 – 12.

Nachdem ein Wechsel der Dienstgebersteuernummer durch die Vorgaben des L16 Formulars einen zweigeteilten L16 erfordert, kommt die Variante mit *Wiedereintritt* hierfür nicht in Frage.