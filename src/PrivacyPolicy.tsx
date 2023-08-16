import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ReactMarkdown from 'react-markdown'

import 'github-markdown-css'

const TEXT = `
# Privacy Policy

At Sign in with Google, we prioritize the privacy and security of our users.

This Privacy Policy outlines how we collect, use, and protect your personal information when you use our sign-in service.

## 1. Information We Collect

When you choose to Sign in with Google, we will collect:

- Your name.
- Your email address.
- Your profile picture (if available).

## 2. How We Use Your Information

We use the information collected during the sign-in process to:

- Authenticate your identity and provide secure access to our services.
- Check your order, subscription or license available.

## 3. Information Sharing

We do not sell, trade, or rent your personal information to third parties.

## 4. Data Security

We take the security of your personal information seriously and have implemented appropriate measures to protect it from unauthorized access, alteration, disclosure, or destruction.

However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we can't guarantee 100% security.

## 5. Data Retention

We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.

## 6. Your Rights

You have the right to access, update, and delete your personal information.

If you wish to exercise these rights or have any questions or concerns about our privacy practices, please contact us using the information below.

## 7. Changes to this Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations.

We encourage you to review this Privacy Policy periodically for any updates.

## 8. Contact Us

If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at <matthewlee0725@gmail.com> 👀
`

const PrivacyPolicy = () => {
  return (
    <Container
      maxWidth='sm'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 4,
        pb: 8,
      }}
    >
      <Box>
        <ReactMarkdown className='markdown-body'>
          {TEXT}
        </ReactMarkdown>
      </Box>
    </Container>
  )
}

export default PrivacyPolicy
