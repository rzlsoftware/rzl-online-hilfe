# EBICS Schnittstelle

Bei EBICS (Electronic Banking Internet Communication Standard) handelt es sich um einen internetbasierten Kom-munikationsstandard zwischen Unternehmen und Banken/Sparkassen, der neben dem gesicherten Datenaus-tausch auch die Autorisierung bzw. die Freigabe von (Zahlungs-)Aufträgen an die Bank standardisiert.
Um den Zahlungsverkehr noch effizienter zu gestalten, wurde dieses Tool in RZL integriert. Die Einstellungen und sonstigen Funktionen finden Sie im RZL Board unter Portale.

Die **RZL EBICS-Schnittstelle ist kostenpflichtig** und nur in Verbindung mit dem **RZL Board Basis-Programm**, der **RZL FIBU Klassik**, der **RZL EA Klassik**, der **RZL FIBU Next** bzw. **RZL LOHN** nutzbar. Des Weiteren möchten wir darauf hinweisen, dass für die Nutzung der verschiedenen Funktionen auch das **RZL FIBU Modul Verarbeitung Retourdaten** (für den Abruf von CAMT-Daten) und das **RZL FIBU Modul Zahlungsverkehr** (Überweisungen) notwendig ist, welche in der RZL FIBU/EA Lizenz von Steuerkanzleien umfasst sind. In den Firmenversionen sind die beiden FIBU/EA Module optional zu erwerben.
Für die Nutzung der RZL EBICS Schnittstelle ist weiters der **RZL Dienst** vom Systembetreuer zu installieren, falls dieser nicht ohnehin bereits installiert wurde (z.B. für HON Next, …). Details siehe **RZL Setup-Handbuch** (aufruf-bar im RZL Programm unter HILFE – HANDBUCH). 

## Einstellung zur Nutzung
--
Unter EBICS Teilnehmer ist ein neuer Teilnehmer (1) anzulegen. Die dafür benötigten Zugangsdaten bzw. Informa-tionen erhalten Sie jeweils von den Banken. Speichern Sie den Teilnehmer mithilfe des Buttons. Der Status zeigt ![Plus](<img/Bild7.png>) , welcher symbolisieren soll, dass der Teilnehmer im RZL angelegt wurde und anschließend zur Initialisierung (2) bereits steht.

![Portale - EBICS](<img/EBICS Teilnehmer.png>)

Beim Klick auf Initialisieren werden Sie aufgefordert ein Passwort für den Teilnehmer zu hinterlegen.

![Passwort speichern](<img/Bild9.png>)

!!! warning "Hinweis"
    **Das Passwort wird nicht gespeichert und kann von RZL nicht ausgelesen werden. Bitte notieren Sie sich dieses Passwort!**

Nachdem Sie das Fenster zur Passworteingabe mit OK bestätigt haben, wird automatisch der Initialisierungsbrief INI Brief erstellt. Dieser wird automatisch im jeweiligen Standardprogramm (Adobe, Microsoft Edge,…) geöffnet.

![INI Brief](<img/Bild10.png>)

Der Initialisierungsbrief muss unterschrieben an das Bankinstitut weitergeleitet werden. Bis zur Bestätigung der Bank wird der Status des EBICS Teilnehmers im RZL mit
![Sanduhr](<img/Bild10_1.png>) gekennzeichnet.
Der Status des EBIC Teilnehmers ist zu aktualisieren (3).

![Aktualisieren](<img/Bild11.png>)

Sie werden zur Passworteingabe aufgefordert.

![Passwort eingeben](<img/Bild12.png>)

Wurde der EBICS Teilnehmer seitens der Bank bestätigt, wird dieser mithilfe von Aktualisieren (3) aktiviert. Dies wird wiederrum mit ![Hakerl](<img/Bild13.png>)  symbolisiert.

**Status EBICS-Teilnehmer**

![Hakerl](<img/Bild13.png>)             Aktiver Teilnehmer

![Sanduhr](<img/Bild10_1.png>)          Teilnehmer seitens der Bank noch nicht freigeschaltet

![Plus](<img/Bild7.png>)                Teilnehmer ist angelegt; Anfrage zur Bank erfolgte noch nicht

![Warndreieck](<img/Bild38.png>)        Teilnehmer wurde deaktiviert


Das Deaktivieren (4) von EBICS Teilnehmern führt zu einer sofortigen Sperre bei der Bank. Der Teilnehmer kann also **nicht** mehr verwendet werden. Wird der Teilnehmer deaktiviert, ist die betroffene Bank zu kontaktieren.

![Teilnehmer deaktivieren](<img/Bild17.png>)

**EBICS-Teilnehmer deaktivieren vs. löschen**

Mit dem Button Deaktivieren kann der Teilnehmer bei dem jeweiligen Kreditinstitut deaktiviert werden. Wird der Teilnehmer bloß gelöscht, vorher aber nicht deaktiviert bleibt der Teilnehmer beim Kreditinstitut bestehen. Aber der Eintrag dieses Teilnehmers wird im RZL gelöscht.

### Transport- und Zeichnungsberechtigungen der Kreditinstitute

Für den Abruf der CAMT-Dateien sowie dem EBICS-Zahlungsverkehr im RZL werden separate EBICS-Teilnehmer Ihres Kreditinstituts benötigt. Diese müssen beim Kreditinstitut vorab angefordert werden.

**Transportberechtigung**

Mit dieser Berechtigung können CAMT-Auszüge über die EBICS Schnittstelle abgerufen sowie Zah-lungsverkehrsdateien ohne automatische Freigabe gesendet werden. Das bedeutet, die Freiga-be der in der Zahlungsverkehrsdatei enthaltenen Überweisungen erfolgt im Banking Programm.

**Zeichnungsberechtigung**

Mit dieser Berechtigung kann zusätzlich über die EBICS Schnittstelle die Freigabe der in der Zah-lungsverkehrsdatei enthaltenen Überweisungen vorgenommen werden. Dafür ist grundsätzlich aus Sicherheitsgründen die Eingabe des Passwortes für den jeweiligen Teilnehmer erforderlich. In der EBICS Schnittstelle besteht die Möglichkeit dieses Passwort lokal zu speichern, was aber aus den oben genannten Sicherheitsgründen nicht empfohlen wird.

!!! info "Tipp"
    Mithilfe Export Teilnehmerberechtigungen können Sie sich ein TXT File exportieren, welches Informationen über Berechtigungen je ausgewähltem EBICS Teilnehmer beinhaltet.
    ![Export Teilnehmerberechtigungen](<img/Export Teilnehmerberechtigungen.png>)

## Passwort Speicherung

Für den *automatischen* CAMT Abruf kann das Passwort über den RZL Dienst gespeichert werden (5). Dies ist jedoch nur bei Teilnehmern möglich, welche eine Transport- oder Leseberechtigung haben und somit keine Zeichnungsberechtigung.

![PW speichern RZL Dienst](<img/Bild18.png>)

![Hinweis Speicherung](<img/Bild19.png>)

Zum Speichern des Passwortes werden Sie erneut aufgefordert, dieses einzutragen. Wird keine Speicherung des Passwortes mehr gewünscht, kann dies über denselben Button – nach Speicherung wird der Name des Buttons in Passwort löschen RZL Dienst umbenannt - gelöscht werden.

**Aus Sicherheitsgründen empfehlen wir, dass Sie Ihre Kunden und Klienten dahingehend aufklären, dass Zahlungsaufträge detailliert kontrolliert werden müssen. Zudem empfehlen wir aus Sicherheitsgründen die lokale Speicherung des Passworts nur bei Teilnehmern, welche eine reine Transportberechtigung besitzen.**

Zusätzlich zum Speichern des Passwortes für den automatischen CAMT Abruf, können die Passwörter auch lokal gespeichert werden, damit diese nicht ständig von Ihnen einzutragen sind. Sie erhalten denselben Hinweis, wie auch bei der Speicherung für den automatischen CAMT Abruf. Damit Sie mit der Speicherung fortfahren können, muss mit Gelesen und verstanden bestätigt werden.

!!! warning "Hinweis"
    Wird das Passwort lokal gespeichert und liegt für den Teilnehmer eine *Zeichnungsberechtigung* vor, werden *Zahlungen in der Zahlungsverkehrsdatei automatisch elektronisch unterschrieben* und durchgeführt! Ob eine Zeichnungsberechtigung vorliegt sehen Sie in der Teilnehmerverwaltung in der Spalte *Zeichnungsberechtigt*.


## CAMT-Abruf

Je angelegtem EBICS Teilnehmer können Sie sich die zugehörigen Konten inkl. Klienten anzeigen lassen.

![Konten anzeigen](<img/Bild20.png>)

Die in dieser Liste angezeigten Bankverbindungen stammen direkt von der Bank. Die zugehörigen Klienten werden durch einen Abgleich der Stammdaten hinterlegt. 

Wurde die Bankverbindung in den Stammdaten (Personen- oder Firmendaten) eingetragen, wird der Klient somit hier verknüpft.

Den automatische CAMT Abruf können Sie aktivieren bzw. falls dieser nicht erwünscht ist deaktivieren. Außerdem sehen Sie hier, für wie viele Teilnehmer der automatische Abruf aktiviert wurde, für wie viele die Aktivierung möglich wäre und für wie viele die Aktivierung nicht möglich ist.

![EBICS Einstellungen](<img/Bild21.png>)

Sie können den Abruf für alle freigeschaltenen Teilnehmer oder nur für einen (dieser muss markiert werden) durchführen. 

Als freigeschaltete Teilnehmer gelten jene mit dem Status ![Hakerl](<img/Bild13.png>)

![Abschnitt CAMT](<img/CAMT Buttons.png>)

Bei einem erfolgreichen Abruf erscheint folgendes Fenster zum Bestätigen:

![CAMT Abruf Status](<img/Bild23.png>)

Beim CAMT Abruf (1) werden immer die aktuellsten bzw. die noch nicht abgerufenen CAMT abgerufen. Damit dies funktioniert, wird ein Flag gesetzt, welcher definiert, welche CAMT noch nicht abgerufen wurden.

Treten Fehler beim manuellen Abruf auf, können Sie im Protokoll Kommunikation die Details zum fehlerhaften Abruf einsehen.

Bei einem fehlerhaften automatischen Abruf können Sie dies über das Benachrichtigungszentrum ![Benachrichtigungszentrum](<img/Bild24.png>) vorab bereits erkennen und ebenso im Protokoll Kommunikation die Details einsehen.

![Kommunikationsprotokoll](<img/Bild25.png>)

Beim CAMT Abruf historisch (2) können Sie ein Von – Bis Datum eintragen und jene CAMT zwischen diesem Zeitraum abrufen. Grundsätzlich benötigen Sie den historischen Abruf nicht, da wie erwähnt ein Flag gesetzt wird und die benötigten CAMT Dateien nach Reihenfolge abgerufen werden.

!!! info "Hinweis"
    Bei einem historischen Abruf wird außerdem ein Abgleich von bereits gebuchten und ungebuchten CAMT-Dateien durchgeführt. Wenn mit einem historischen Abruf bereits gebuchte CAMT Dateien abgerufen werden, werden diese nicht wieder als ungebuchte CAMT eingespielt. Es kann somit also nicht zu einer doppelten Verbuchung kommen.

![CAMT Abruf historisch](<img/Bild26.png>)

Unter Ungebuchte CAMT Dateien (3) finden Sie eine Übersicht, welche CAMT Dateien je Bankverbindung und zugeordneten Klienten *noch nicht* gebucht wurden.

![Ungebuchte CAMT Dateien](<img/ungebuchte CAMT.png>)

Unter Gebuchte CAMT Dateien (4) finden Sie eine Übersicht, welche CAMT Dateien je Bankverbindung und zugeordneten Klienten bereits gebucht wurden. 

!!! info "Hinweis"
    Der Aufbau der Ansichten **ungebuchte CAMT Dateien** und **gebuchte CAMT Dateien** ist ident. In beiden Listen finden Sie dieselben Informationen.

In diesen beiden Listen können Sie ebenso die CAMT Dateien exportieren oder löschen.

### PDF-Auszug
Wurde bei der Bank die Zustellung von PDF-Auszügen bestellt und auch im EBICS Teilnehmer die Option *Abruf inkl. PDF-Auszug* aktiviert, sind in beiden Listen ebenso die PDF Auszüge abrufbar. Sie haben im RZL die Möglichkeit diese zu exportieren, um diese ggf. in die Belegverarbeitung zu importieren.

Es kann vorkommen, dass ein PDF-Auszug keiner CAMT Datei zugeordnet werden kann. Ist das der Fall, können Sie unter **Nicht zugeordnete PDF Auszüge** das PDF zuordnen, um diesen in der Ansicht ungebuchte/gebuchte CAMT Dateien aufrufen zu können. In der linken Hälfte finden Sie die nicht zugeordneten Auszüge vor, welche Sie mithilfe von den Pfeiltasten auf die rechte Hälfte - also zur dazugehörigen CAMT Datei - zuordnen können.

![nicht zugeordnete PDF Auszüge](<img/nicht zugeordnete PDF.png>)

Außerdem gibt es auch hier wieder die Möglichkeit die PDF und CAMT Datieen zu exportieren.

!!! warning "Hinweis"
    Die Verarbeitung von CAMT-Retourdaten in der RZL FIBU/EA Klassik bzw. der RZL FIBU Next bleibt mit Einführung der EBICS Schnittstelle ident. Die Schnittstelle dient lediglich zum Abruf bzw. zum Transport von Bankdaten.
    Die bisherige Kommunikation über Online-Services der Bank (manueller Abruf CAMT53 oder .csv-Dateien ohne bisherige MBS-Software) ist weiterhin möglich. Detailinformationen erhalten Sie bei den jeweiligen Bankinstituten.


## Zahlungsverkehr

!!! warning "Hinweis"
    Bevor Sie innerhalb unseres EBICS Moduls mit der Verwendung des Zahlungsverkehrs beginnen, stellen Sie bitte sicher, dass die Klienten – für welche Sie eine Zahlungsdatei erzeugen und versenden – über ein EBICS-fähiges Kundenportal verfügen. Sollte dies nicht vorhanden sein, können Zahlungsdateien, welche mit einem transportberechtigten Teilnehmer versendet werden nicht von Ihrem Klienten freigegeben werden.

Bei Erstellung von Bankeinzügen und Überweisungen wird die XML-Datei in das RZL Board gestellt. Im RZL Board finden Sie die zu übermittelten Zahlungsdateien unter **offene EBICS Übermittlungen** unter Portale -> EBICS.

![Offene EBICS Übermittlungen](<img/Offene EBICS Übermittlungen.png>)

Aus dieser Ansicht der offenen Übermittlungen, senden Sie die Zahlungsdateien dann weiter an die Bank. Außerdem können die XML-Dateien exportiert + importiert werden bzw. können Sie sich die Details anzeigen lassen und die Datei löschen.

### Empfängerüberprüfung VoP

!!! warning "Hinweis"
    Bis zum 9. Oktober 2025 wird im europäischen Zahlungsverkehr die Empfängerüberprüfung (Verification of Payee - VoP) - eine neue gesetzliche Pflicht - eingeführt, welche Betrug und Fehlüberweisungen bei SEPA-Zahlungen zu verhindern soll.

Markieren Sie die Zahlungsdatei und klicken Sie auf **Übermitteln**. Folgendes Fenster wird angezeigt:

![Zahlungsdatei übermitteln VoP](<img/Empfängerüberprüfung.png>)

Wählen Sie den EBICS Teilnehmer, von welchem die Zahlungsdatei übermittelt werden soll aus, tragen das Passwort ein und wählen im Drop-Down Menü zur Empfängerüberprüfung die gewünschte Option aus. 

Bei *Standard* und *Opt-Out* handelt es sich um die gleiche Art, nämlich **ohne** Empfängerüberprüfung. Bei einer Übermittlung mit der Art *Opt-In* wird die Empfängerüberprüfung durchgeführt.

Nach Wahl der Art **Opt-In - mit Empfängerüberprüfung** wird die Empfängerüberprüfung durchgeführt und folgendes Fenster im RZL angezeigt:

![Empfängerüberprüfung VoP Ergebnis abrufen](<img/VoP Ergebnis.png>)

Hier können Sie das VoP Ergebnis abrufen. In der Spalte *VoP* wird der Status mittels der Icons dargestellt. Die Definition der Icons befindet sich über dem VoP Ergebnis.

!!! warning "Hinweis"
    Die VoP Ergebnisse werden **von der Bank übermittelt**. Die Zurverfügungstellung der Ergebnisse kann je nach Bank variieren und mehrere Sekunden/Minuten dauern. Wenn noch keine Ergebnisse zur Verfügung stehen, könnten Sie folgende Fehlermeldung erhalten:
    ![Fehler Abruf VoP](<img/Fehler VoP.png>)
    **Bitte um Geduld, versuchen Sie es später erneut.**
    Sie können anschließend aus dem Fenster aussteigen. Die Zahlungsdatei befindet sich nun nicht mehr in den offenen, sondern in den **gesendeten Übermittlungen**.
    Sobald die VoP-Ergebnisse vorliegen, können in den gesendeten Übermittlungen die Zahlungsdateien freigegeben oder storniert werden.

Nach Erhalt des Ergebnisses kann dies z.B. so aussehen:

![Ergebnis VoP](<img/VoP Ergebnis mit Übereinstimmung.png>)

Hier entscheiden Sie, ob die Zahlungsdatei freigegeben wird oder Sie die Zahlung stornieren.

Stehen die VoP Ergebnisse beim Übermitteln aus den offenen Übermittlungen noch nicht zur Verfügung, ist zum schlussendlichen Freigeben die Liste **gesendete Übermittlungen** aufzurufen. Hier können die VoP Ergebnisse abgerufen und angezeigt werden.

![Gesendete EBICS Übermittlungen](<img/Gesendete EBICS Übermittlungen.png>)

Markieren Sie die gewünschte Zahlungsdatei und öffnen Sie **Empfängerüberprüfung** im Ribbon.

Am *Status* können Sie erkennen, ob die Zahlungsdatei übermittelt wurde. Am **VoP Status** könnnen Sie folgendes erkennen:

| VoP Status                                                | Definition                                                                                               |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |  |
| ![Papier mit Stift](<img/warte auf Aktion.png>)           | "Warte auf Aktion" - Die Zahlungsdatei muss freigegeben/storniert werden                                 |
| ![graues Hakerl](<img/keine zeichnungsbereichtigung.png>) | Die Zahlungsdatei wurde mit einem EBICS Teilnehmer ohne Zeichnungsberechtigung übermittelt               |
| ![grünes Hakerl](<img/ausgeführt.png>)                    | Die Zahlungsdatei wurde freigegeben                                                                      |
| ![rotes X](<img/storniert.png>)                           | Die Zahlungsdatei wurde storniert                                                                        |
| Status ist leer                                           | Die Zahlungsdatei wurde mit der Option *Standard* oder *Opt-Out - ohne Empfängerüberprüfung* übermittelt |



## EBICS in der RZL FIBU/FIBU Next/EA und im RZL Lohn

Die nötigen Einstellungen und die Bedienung von CAMT Retourdaten und des Zahlungsverkehrs mit EBICS in der RZL FIBU/FIBU Next/EA entnehmen Sie bitte der Kurzanleitung [*EBICS Schnittstelle RZL Finanzbuchhaltung*](https://rzlsoftware.at/fileadmin/user_upload/PDF_Kurzanleitungen/BOARD/BOARD_EBICS_Schnittstelle.pdf).

Die nötigen Einstellungen und die Bedienung des Zahlungsverkehres mit EBICS im RZL Lohn entnehmen Sie bitte der Kurzanleitung *EBICS Schnittstelle im RZL Lohnverrechnungsprogramm*.


## Protokolle

Im Abschnitt Portale -> EBICS können Sie die Protokolle Teilnehmer und Kommunikation einsehen.

Im Protokoll Teilnehmer werden Neuanlagen von Teilnehmer, Initialisierungen und Passwort Speicherung/Löschung inkl. genauer Zeitpunkt und durchführender Mitarbeiter protokolliert.

Im Protokoll Kommunikation wird protokolliert, wann, von wem, für welche Bank der CAMT Abruf durchgeführt wurde. Ist der Mitarbeiter = RZL Service, dann wurde der automatische CAMT Abruf durchgeführt. Bei Fehlern in Bezug auf den CAMT Abruf werden hier ebenso jegliche Informationen eingetragen.

Im Bereich EBICS Teilnehmer gibt es zusätzlich das Bankprotokoll. Dieses kommt direkt vom Bankserver und zeigt die Zahlungsvorgänge.

## Berechtigungen

Die EBICS-Schnittstelle ist an das RZL BOARD geknüpft. Um die Verwaltungs- bzw. Bearbeitungsmöglichkeiten Ihrer Mitarbeitenden steuern zu können, wurden eigene Rollen definiert. Im RZL BOARD können unter Stamm / Berechtigungen / Rollen spezielle RZL EBICS-Rollen mit Einschränkungen auf bestimmte Klientengruppen vergeben werden.

![EBICS Rollen](<img/EBICS Rollen.png>)

Zudem befinden sich üblicherweise alle Berechtigungen betreffend EBICS in der Rolle *Alle Berechtigungen*. Die Rolle *RZL-Administrator* verfügt allerdings nur über bestimmte ausgewählte Berechtigungen betreffend EBICS.
