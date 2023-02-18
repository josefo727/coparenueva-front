import styles from '/styles/Navbar.module.css'
import {Navbar, Link, Text, Dropdown, User} from "@nextui-org/react";

export default function NavbarTop() {
    const collapseItems = [
        "Features",
        "Customers",
        "Pricing",
        "Company",
        "Legal",
        "Team",
        "Help & Feedback",
        "Login",
        "Sign Up",
    ];
    const userDropdown = [
        { key: "new", name: "New File" },
        { key: "copy", name: "Copy Link" },
        { key: "edit", name: "Edit File" },
        { key: "delete", name: "Delete File" },
    ];
    return (
        <Navbar isBordered variant='sticky' className={styles.fixed}>
            <Navbar.Brand>
                <Navbar.Toggle aria-label="toggle navigation" className={styles.btnToggle} showIn="xs"/>
                <Text b color="inherit">
                    Casos Especiales
                </Text>
            </Navbar.Brand>

            <Navbar.Content enableCursorHighlight variant="underline">
                <Dropdown placement="bottom-left">
                    <Dropdown.Trigger>
                        <User
                            bordered
                            as="button"
                            size="md"
                            name="Renovador"
                            src="/user.png"
                        />
                    </Dropdown.Trigger>
                    <Dropdown.Menu color="primary" aria-label="User Actions">
                        {userDropdown.map(({name, key}) => (
                            <Dropdown.Item
                                key={key}
                                color={key === "delete" ? "error" : "default"}
                            >
                                {name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Content>

            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem key={item}>
                        <Link
                            color="inherit"
                            css={{minWidth: "100%"}}
                            href="#"
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    )
}