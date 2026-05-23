# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in MiMo Smart Contract Explainer, please report it responsibly:

1. **Do not** disclose the vulnerability publicly
2. Email security@example.com with details
3. Include steps to reproduce, impact assessment
4. We will respond within 48 hours

## Security Features

- **Code Sanitization:** All user input is sanitized before processing
- **No Code Execution:** Contract code is never executed, only analyzed
- **Rate Limiting:** API endpoints are rate-limited to prevent abuse
- **Privacy:** User code is not stored without explicit consent
- **HTTPS:** All connections use TLS encryption

## Best Practices for Users

1. **API Keys:** Never commit API keys to version control
2. **Environment Variables:** Use .env.local for local development
3. **Updates:** Keep dependencies updated to latest secure versions
4. **Monitoring:** Monitor API usage for unusual patterns
