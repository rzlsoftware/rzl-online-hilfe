# Port- und Programmfreigaben der RZL Programme

## Warum sind Portfreigaben notwendig?

- **Kommunikation:**  
    RZL Programme kommunizieren über bestimmte Ports. Standardmäßig sind diese Ports durch Firewalls oder Router blockiert, um die Sicherheit zu erhöhen. Um die Kommunikation zu ermöglichen, müssen diese Ports freigegeben werden.

- **Funktionsweise:**   
    RZL Programme nutzen die Portfreigaben, um Daten zu senden und zu empfangen. Dies ist wichtig für Funktionen wie die Anbindung an Datenbanken, Online-Dienste wie FinanzOnline sowie die Gewährleistung der Funktionalität eigener Systemdienste.

- **Sicherheit:**  
    Portfreigaben können die Sicherheit Ihres Netzwerks beeinträchtigen. Geben Sie daher nur die Ports frei, die für Ihre RZL Programme wirklich notwendig sind.

!!! warning "Hinweis"
    Im Zuge der Setup-Installation werden alle notwendigen Ports, die für die Funktionalität der RZL Programme erforderlich sind, automatisch freigegeben. Eine erneute Freigabe ist in der Regel nicht notwendig.

Beim Öffnen oder Ändern von Firewall-Regeln ist es wichtig, sowohl die Standardportkonfigurationen als auch mögliche individuelle Portanpassungen (z. B. für den RZL Dienst oder SQL-Server) zu berücksichtigen. So wird eine reibungslose Funktionalität gewährleistet und gleichzeitig den Sicherheitsrichtlinien entsprochen. Vor solchen Änderungen empfiehlt sich eine umfassende Sicherheitsüberprüfung.

## Verwendete Ports

| Protokoll               |         | Port       |
| ----------------------- | ------- | ---------- |
| HTTP                    | TCP     | 80         |
| HTTPS                   | TCP     | 443        |
| RZL Dienste             | TCP     | 5756, 5757 |
| SMB                     | TCP     | 139, 445   |
| SQL-Server, SQL-Browser | TCP/UDP | 1433, 1434 |

## Programmfreigaben

- **SQL-Server:**  
    `C:\Program Files\Microsoft SQL Server\MSSQLXX.MSSQLSERVER\MSSQL\Binn\sqlservr.exe`

 - **SQL-Browser:**  
    `C:\Program Files\Microsoft SQL Server\90\Shared\sqlbrowser.exe`

### Programmfreigabe für SQL Server Instanz

!!! warning "Hinweis"
    Anstelle von `MSSQLXX.MSSQLSERVER` setzen sie die korrekte SQL Version z.B. `MSSQL15.MSSQLSERVER.`.

### Programmfreigabefür SQL Server (MSSQLSERVER)

New-NetFirewallRule -DisplayName "SQL Server (MSSQLSERVER)" `
-Direction Inbound `
-Program "C:\Program Files\Microsoft SQL Server\MSSQLXX.MSSQLSERVER\MSSQL\Binn\sqlservr.exe" `
-Action Allow `
-Profile Any `
-Description "Erlaubt eingehenden Traffic für SQL Server Instanz"

### Programmfreigabe für SQL Browser Service

New-NetFirewallRule -DisplayName "SQL Browser Service" `
-Direction Inbound `
-Program "C:\Program Files (x86)\Microsoft SQL Server\90\Shared\sqlbrowser.exe" `
-Action Allow `
-Profile Any `
-Description "Erlaubt eingehenden Traffic für SQL Browser"

### Portfreigabe für SQL Server (TCP 1433)

New-NetFirewallRule -DisplayName "SQL Server (TCP-In 1433)" `
-Direction Inbound `
-LocalPort 1433 `
-Protocol TCP `
-Action Allow `
-Description "Eingehende SQL-Verbindungen über Port 1433"

### Portfreigabe für SQL Browser (UDP 1434)

New-NetFirewallRule -DisplayName "SQL Browser (UDP-In 1434)" `
-Direction Inbound `
-LocalPort 1434 `
-Protocol UDP `
-Action Allow `
-Description "Eingehende SQL-Browser-Anfragen über Port 1434"
