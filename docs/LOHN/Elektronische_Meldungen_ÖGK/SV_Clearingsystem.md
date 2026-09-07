# SV-Clearingsystem

Seit 01.01.2019 werden Rückmeldungen und Fehlerhinweise durch die Österreichischen Gesundheitskasse nur mehr in elektronischer Form bekannt gegeben. Statt eines Schreibens per Post oder eines Telefonanrufes erhält man einen sogenannten Clearingfall zugestellt. Diese Zustellung erfolgt einerseits über das Portal WEBEKU der Österreichischen Gesundheitskasse und andererseits mit Hilfe der ELDA-Software.

## Clearingsystem-E-Mail-Verständigung

Speziell dann, wenn das Lohnprogramm nur sporadisch geöffnet wird, sollten Sie sicherstellen, dass Sie keine in den Clearingfällen definierte Frist versäumen. Im Portal WEBEKU können hierfür je Beitragskontonummer E-Mail-Adressen hinterlegt und bearbeitet werden.

![Image](<img/image200.png>)

![Image](<img/image201.png>)

![Image](<img/image202.png>)

Falls anschließend ein Clearingfall eintrifft, ist sichergestellt, dass der entsprechende Sachbearbeiter rechtzeitig darauf reagieren kann.

## Zuordnungsanwendung

Die automatische Übernahme der Clearingfälle erfolgt mit Hilfe der ELDA-Software, die auch für die Übermittlung der Meldungen herangezogen wird. Hierfür muss jedoch zunächst sichergestellt werden, dass sämtliche Clearingfälle auch in der ELDA-Software des zuständigen Dienstgebers bzw. der zuständigen Kanzlei landen.

Hierfür wurde im Unternehmensserviceportal mit dem Punkt *SV-Clearingsystem Zuordnungsanwendung* eine neue Funktion geschaffen.

![Image](<img/image203.png>)

![Image](<img/image204.png>)

Es muss hier einmalig eine Zuordnung sämtlicher Beitragskontonummern der Kanzlei / Firma zur jeweiligen Seriennummer erfolgen.

!!! info "Tipp"
    Nur mit Hilfe der Zuordnungsanwendung können Sie sicherstellen, dass auch Clearingfälle, die keinen direkten Bezug zu einer erfolgten Meldung haben (z. B. Mahnungen wegen fehlender Abmeldung), in der ELDA-Software zugestellt werden.

## Clearingfälle im RZL-Lohnprogramm

Die RZL-Lohnverrechnung prüft beim Programmstart, ob neue Clearingfälle in der ELDA-Software vorhanden sind, diese werden gegebenenfalls durch einen Hinweis angezeigt.

![Image](<img/image205.png>){width="300"}

!!! info "Tipp"
    Wie bei den Krankenstandsbescheinigungen wird auch bei den Clearingfällen bei jeder „normalen“ ELDA-Übermittlung geprüft, ob neue Clearingfälle vorhanden sind.

Das eigentliche Dialogfeld für die Clearingfälle kann über das Symbol in der Menüleiste geöffnet werden.

![Image](<img/image206.png>)

![Image](<img/image207.png>)

Der Menüpunkt *Bearbeiten / Elektronische Übermittlung / Elektronische Meldung ÖGK – Clearingfälle* zeigt ebenso jene Clearingfälle an, die dem betroffenen Klienten zugeordnet sind. In der Übersichtsmaske wird eine Reihe von Informationen zum Clearingfall bereits dargestellt.

![Image](<img/image208.png>)

Über einen Doppelklick auf den Clearingfall erhalten Sie einen detaillierten Überblick zum jeweiligen Clearingfall. Auf Basis des Rückmeldetextes müssen anschließend die erforderlichen Maßnahmen durch den Benutzer gesetzt werden, zum Beispiel das Nachreichen einer fehlenden Anmeldung. Durch Anwahl des Fehlercodes gelangen Sie zum jeweiligen Clearing-Fehlercode mit der entsprechenden ELDA-Lösung.

Falls aus dem Rückmeldetext keine eindeutigen Rückschlüsse auf den Fehler oder das zugrunde liegende Problem möglich sind, empfehlen wir einen Doppelklick auf den Fehlercode. Dadurch gelangen Sie zum jeweiligen [Clearing-Fehlercode](../Clearingfaelle.md) mit der entsprechenden ELDA-Lösung.

Manche Clearingfälle sind lediglich als Hinweis zu verstehen und erfordern nicht zwingend eine Korrektur. In solchen Fällen kann es sinnvoll sein, vorab Kontakt mit der ÖGK aufzunehmen und den Sachverhalt zu klären.

Über den Menüpunkt Fehlercodes gelangen Sie zur im Handbuch verlinkten Übersicht der [Clearing-Fehlercodes](../Clearingfaelle.md).

![Image](<img/image209.png>){width="350"}

Wurden die notwendigen Maßnahmen gesetzt, kann der Clearingfall über das Kontextmenü (*rechte Maustaste*) oder über die *F3-Taste* anschließend auf *geschlossen* gesetzt werden.

Im Clearingdialog finden Sie zudem noch diverse Filter- und Druckoptionen, sowie für den Ausnahmefall die Möglichkeit, Clearingfälle nochmals aus einer Datei bzw. einem Verzeichnis heraus manuell zu übernehmen.

!!! info "Tipp"
    Es gibt wie bei den Krankenstandsbescheinigungen, ebenso einen klientenübergreifenden (globalen) Dialog, der die Clearingfälle sämtlicher Klienten anzeigt. Dieser kann über den *Menüpunkt Klient / Elektronische Übermittlung / Elektronische Meldung ÖGK – Clearingfälle* erreicht werden.

![Image](<img/image210.png>){width="500"}

Die Clearingfälle zum Thema Verrechnungsgrundlage gibt es in den unterschiedlichsten Ausprägungen, weshalb es auch nicht möglich ist, einen einzigen Lösungsweg hierfür zu nennen. Die RZL-Lohnverrechnung versucht aufgrund diverser interner Prüfungen eine vom Standardfall 1 = „Zeit und Abrechnung in SV und BV“ abweichende Verrechnungsgrundlage zu ermitteln, z. B. im Falle von lang andauernden Krankenständen.

Da es noch einige Konstellationen gibt, die wir nicht automatisieren können, haben wir im Abrechnungsbildschirm [*Sozialversicherung*](../Abrechnungsbildschirme/Sozialversicherung.md) die Möglichkeit geschaffen, diese Grundlage manuell zu steuern.

![Image](<img/image211.png>){width="500"}