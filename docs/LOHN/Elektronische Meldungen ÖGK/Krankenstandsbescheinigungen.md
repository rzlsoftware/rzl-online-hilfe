# Krankenstandsbescheinigungen

## Krankenstandsbescheinigungen herunterladen und übernehmen

Der Programmteil *Klient / Elektronische Übermittlung / Krankenstandsbescheinigungen* zeigt die Dienstnehmer an, für die elektronische Krankenstandsbescheinigungen vorhanden sind.

![Image](<img/image197.png>){width="600"}

Dieser Programmteil wird automatisch befüllt, wenn Meldungen an Elda verschickt werden. Wenn beispielsweise ein mBGM versendet wird, prüft das Elda-Programm der Österreichischen Gesundheitskasse, ob Krankenstandsbescheinigungen heruntergeladen werden können. Sind welche vorhanden, wird automatisch heruntergeladen.

Durch Anwahl der Schaltfläche *Empfangen* können, wenn vorhanden, Krankenstandsbescheinigungen heruntergeladen werden, ohne vorher eine Meldung an die ÖGK senden zu müssen.

Die Schaltfläche *Aus Datei übernehmen* ermöglicht das Hereinspielen von heruntergeladenen Dateien.

## Registrierung bei ELDA-Anmeldung

Damit die Krankenstandsbescheinigungen automatisch empfangen werden können, ist eine Anmeldung bei ELDA notwendig. Diese Anmeldung kann online erfolgen ([www.elda.at](https://www.elda.at/cdscontent/?contentid=10007.838866&portal=eldaportal)).

![Image](<img/image198.png>){width="500"}

## Import Krankenstandsbescheinigungen

Damit die Krankenstandsbescheinigungen in den Lohnverrechnungsklienten übernommen werden, ist als erster Schritt die Übernahme in den Klientenstammdaten zu aktivieren.

Die Aktivierung erfolgt im Programmteil *Stamm / Klient* im Registerblatt [*Kostenstellen/Kostenträger, Krankenstandsbescheinigungen / KV*](../Klientenstammdaten/Stammdaten%20Klient/Kostenstellen,%20Kostenträger,%20Krankenstandsbescheinigungen,%20KV.md).

![Image](<img/image212.png>){width="500"}

Wenn nach Aktivierung der Übernahme ein Lohnverrechnungsklient geöffnet wird, in dem sich Dienstnehmer mit Krankenstandsbescheinigungen befinden, wird folgender Programmteil angezeigt.

![Image](<img/image199.png>){width="500"}

Hier können die Dienstnehmer aktiviert werden, deren Krankenstandsbescheinigungen in den Klienten übernommen werden sollen. Diese Krankenstandsbescheinigungen können nachfolgend im Programmteil *Aufruf / Krankenstandsbescheinigungen* bzw. *Ausdruck / Sonderdrucke / Krankenstandsbescheinigungen* aufgerufen bzw. ausgedruckt werden.

Wird zusätzlich das Feld *in Krankenstandskartei übernehmen* aktiviert, werden Zeilen, die sowohl Beginn- als auch Enddatum aufweisen, automatisch in die Krankenstandskartei übernommen.

!!! info "Tipp"
    Nur durch Aktivierung des Auswahlfeldes *in Krankenstandskartei übernehmen* werden die Krankenstände automatisch in die Abrechnung des Dienstnehmers übernommen. Wenn das Auswahlfeld einmal aktiviert wurde, bleibt die Auswahl beim nächsten Import der Krankenstandsbescheinigungen erhalten.