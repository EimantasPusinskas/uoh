Sequence Diagram for Part 0.4

'''mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server->>browser: HTTP status 302
    deactivate server    

'''
